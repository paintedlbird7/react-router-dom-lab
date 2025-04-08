import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MailboxForm({ addBox }) {
  const [formData, setFormData] = useState({
    boxOwner: '',
    boxSize: 'Small',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Box Owner:
        <input
          type="text"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Box Size:
        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  );
}
