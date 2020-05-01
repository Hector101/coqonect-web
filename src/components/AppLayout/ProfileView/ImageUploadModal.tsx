import React, { FunctionComponent, ChangeEvent } from 'react';

import CustomDialog from 'src/components/SharedLayout/Shared/CustomDialog';

type Props = {
  handleAction: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disableActionButton: boolean;
  actionProgressStatus: boolean;
};

const ImageUploadModal: FunctionComponent<Props> = ({
  handleAction,
  onChange,
  disableActionButton,
  actionProgressStatus,
}) => {
  return (
    <CustomDialog
      dialogId="uploadPic"
      title="Image Upload"
      actionText="Upload"
      handleAction={handleAction}
      disableActionButton={disableActionButton}
      actionProcessText="Uploading..."
      actionProgressStatus={actionProgressStatus}
    >
      <div>
        <input type="file" name="myImage" onChange={onChange} className="bg-white" />
        <h5>Select image file not more than 3MB.</h5>
      </div>
    </CustomDialog>
  );
};

export default ImageUploadModal;
