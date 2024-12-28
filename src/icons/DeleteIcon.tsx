
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface DeleteIconProps {
  size?: string;
  color?: string;
  onClick?: () => void;
}
const DeleteIcon = ({ size = '1x', color = 'red', onClick }: DeleteIconProps) => (
  <FontAwesomeIcon
    icon={faTrashAlt}
    size={size}
    color={color}
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  />
);

export default DeleteIcon;
