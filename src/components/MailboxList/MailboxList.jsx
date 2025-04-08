import { Link } from 'react-router-dom';

export default function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>All Mailboxes</h2>
      <div className="mailbox-grid">
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">
              Box #{mailbox._id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
