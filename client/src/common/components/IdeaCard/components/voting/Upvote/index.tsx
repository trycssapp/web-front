import Downvoted from './component/Downvoted';
import Upvoted from './component/Upvoted';

function Upvote({
  handleUpvote,
  upvoted,
  votes,
}: {
  handleUpvote: () => void;
  upvoted: boolean;
  votes: number;
}) {
  return (
    <button
      onClick={handleUpvote}
      className="animate hover:text-white text-on-150"
    >
      {upvoted ? <Upvoted /> : <Downvoted />}
    </button>
  );
}

export default Upvote;
