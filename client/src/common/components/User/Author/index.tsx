import { ReactElement } from 'react';
import { User } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';
import Link from '../../layout/Link';

function UserAuthor({
  children,
  user,
  className,
}: {
  children: ReactElement;
  user?: User.User;
  className?: string;
}) {
  return (
    <Link
      rel="author"
      href={`/user/${user?.id}`}
      className={concat(
        className ? className : '',
        'self-start flex flex-shrink-0 group hover:opacity-90 animate',
      )}
    >
      <div className="relative overflow-hidden rounded-full ">{children}</div>
    </Link>
  );
}

export default UserAuthor;
