import React from 'react';




// User component
const User = ({ user }) => (
  <div>
    <h3>{user.name}</h3>
  </div>
);

// UserList component
const UserList = ({ users }) => (
  <div>
    {users.map(user => (
      <User key={user.id} user={user} />
    ))}
  </div>
);

// Article component
const Article = ({ article }) => (
  <div>
    <h3>{article.title}</h3>
    <p>{article.content}</p>
  </div>
);

// ArticleList component
const ArticleList = ({ articles }) => (
  <div>
    {articles.map(article => (
      <Article key={article.id} article={article} />
    ))}
  </div>
);

// Task component
const Task = ({ task }) => (
  <div>
    <p>{task.description} - {task.completed ? 'Completed' : 'Pending'}</p>
  </div>
);

// TaskList component
const TaskList = ({ tasks }) => (
  <div>
    {tasks.map(task => (
      <Task key={task.id} task={task} />
    ))}
  </div>
);

// Message component
const Message = ({ message }) => (
  <div>
    <p>{message.text}</p>
  </div>
);

// MessageList component
const MessageList = ({ messages }) => (
  <div>
    {messages.map(message => (
      <Message key={message.id} message={message} />
    ))}
  </div>
);

// Comment component
const Comment = ({ comment }) => (
  <div>
    <h4>{comment.author}</h4>
    <p>{comment.content}</p>
  </div>
);

// CommentList component
const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </div>
);

// Photo component
const Photo = ({ photo }) => (
  <div>
    <img src={photo.url} alt={photo.description} />
    <p>{photo.description}</p>
  </div>
);

// PhotoGallery component
const PhotoGallery = ({ photos }) => (
  <div>
    {photos.map(photo => (
      <Photo key={photo.id} photo={photo} />
    ))}
  </div>
);

// Order component
const Order = ({ order }) => (
  <div>
    <p>{order.productName} - Quantity: {order.quantity}</p>
  </div>
);

// OrderList component
const OrderList = ({ orders }) => (
  <div>
    {orders.map(order => (
      <Order key={order.id} order={order} />
    ))}
  </div>
);

// Event component
const Event = ({ event }) => (
  <div>
    <h3>{event.name}</h3>
    <p>{event.date}</p>
  </div>
);

// EventList component
const EventList = ({ events }) => (
  <div>
    {events.map(event => (
      <Event key={event.id} event={event} />
    ))}
  </div>
);

// Song component
const Song = ({ song }) => (
  <div>
    <h3>{song.title} - {song.artist}</h3>
  </div>
);

// Playlist component
const Playlist = ({ songs }) => (
  <div>
    {songs.map(song => (
      <Song key={song.id} song={song} />
    ))}
  </div>
);

// Notification component
const Notification = ({ notification }) => (
  <div>
    <p>{notification.message}</p>
  </div>
);

// NotificationList component
const NotificationList = ({ notifications }) => (
  <div>
    {notifications.map(notification => (
      <Notification key={notification.id} notification={notification} />
    ))}
  </div>
);

// Main App component
const App = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

  const articles = [
    { id: 1, title: 'React Basics', content: 'Introduction to React.' },
    { id: 2, title: 'Advanced React', content: 'Deep dive into React.' }
  ];

  const tasks = [
    { id: 1, description: 'Learn React', completed: true },
    { id: 2, description: 'Build a project', completed: false }
  ];

  const messages = [
    { id: 1, text: 'Hello, how are you?' },
    { id: 2, text: 'I am good, thanks!' }
  ];

  const comments = [
    { id: 1, author: 'John', content: 'Great article!' },
    { id: 2, author: 'Jane', content: 'Very informative.' }
  ];

  const photos = [
    { id: 1, url: 'https://zeduj.wordpress.com/wp-content/uploads/2015/02/most-beautiful-sunrise-in-the-world-2781.jpg',description:'A Beautiful Sunrise'},
    { id: 2, url: 'https://www.hdwallpapers.in/download/calm_beach_under_light_orange_cloudy_sky_hd_beach-HD.jpg', description: 'A calm beach.' }
  ];

  const orders = [
    { id: 1, productName: 'Laptop', quantity: 1 },
    { id: 2, productName: 'Mouse', quantity: 2 }
  ];

  const events = [
    { id: 1, name: 'Conference', date: '2024-09-01' },
    { id: 2, name: 'Meetup', date: '2024-09-10' }
  ];

  const songs = [
    { id: 1, title: 'Song One', artist: 'Artist A' },
    { id: 2, title: 'Song Two', artist: 'Artist B' }
  ];

  const notifications = [
    { id: 1, message: 'New message received' },
    { id: 2, message: 'Your order has been shipped' }
  ];

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />

      <h1>Article List</h1>
      <ArticleList articles={articles} />

      <h1>Task List</h1>
      <TaskList tasks={tasks} />

      <h1>Message List</h1>
      <MessageList messages={messages} />

      <h1>Comment List</h1>
      <CommentList comments={comments} />

      <h1>Photo Gallery</h1>
      <PhotoGallery photos={photos} />

      <h1>Order List</h1>
      <OrderList orders={orders} />

      <h1>Event List</h1>
      <EventList events={events} />

      <h1>Playlist</h1>
      <Playlist songs={songs} />

      <h1>Notification List</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
};

export default App;
