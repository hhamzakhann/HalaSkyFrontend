import { Modal as AntModal } from "antd";

export default function Modal({ children, classname, ...props }) {
  return (
    <AntModal className={classname} open={open} {...props}>
      {children}
    </AntModal>
  );
}
