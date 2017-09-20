import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon } from 'antd';
import SignedRequest from 'api/SignedRequest';
import AwsS3 from 'api/AwsS3';
import ListFile from 'components/ListFile';


class DraggerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageAwsUrl: '',
      signedAction: '',
      fileList: [],
    };
    this.beforeUpload = this.beforeUpload.bind(this);
    this.customRequest = this.customRequest.bind(this);
    this.onSubmitImage = this.onSubmitImage.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onDeleteChange = this.onDeleteChange.bind(this);
  }

  beforeUpload(file) {
    return SignedRequest.getSignedRequest(file)
    .then(result => {
      this.setState({
        imageAwsUrl: result.url,
        signedAction: result.signedRequest,
      });
      return file;
    }).catch((error) => {
      console.log(error);
    });
  }

  customRequest(request) {
    this.setState({ request });
    this.onSubmitImage(request.file);
  }

  onSubmitImage(image, cb) {
    AwsS3.put(image, this.signedAction,
      () => {
        image.url = this.state.imageAwsUrl;
        this.state.request.onSuccess(image);
        image.action = 'new';
        this.props.onChange(image);
      },
      (progress) => {
        if (progress.lengthComputable) {
          let percent = Math.round((progress.loaded / progress.total) * 100);
          this.state.request.onProgress({percent}, image);
        }
      });
  }

  onDeleteChange(file) {
    this.props.onChange(file);
  }

  onFileChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      this.setState({ fileList: [] });
      return;
    }
    this.setState({ fileList });
  }

  get signedAction() {
    return this.state.signedAction;
  }

  render() {
    const { files } = this.props;
    const Dragger = Upload.Dragger;
    const props = {
      name: 'file',
      multiple: false,
      showUploadList: true,
      fileList: this.state.fileList,
      action: this.signedAction,
      onChange: this.onFileChange,
    };
    return (
      <div>
        <Dragger {...props} beforeUpload={this.beforeUpload} customRequest={this.customRequest} >
          <div className='dragger'>
            <Icon type="copy" />
            <p className="label">Haga clic o arrastre el archivo a esta área para cargarlo</p>
          </div>
        </Dragger>
        <ListFile files={files} deletFile={this.onDeleteChange} />
      </div>
    );
  }
};

DraggerForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DraggerForm;
