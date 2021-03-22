import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className='page-not-found'>
      <h1 className='page-not-found__header'>ERROR #404 Page Not Found</h1>
      <h2 className='page-not-found__text'>Oops!</h2>
      <h3 className='page-not-found__text'>
        We can't seem to find the page you're looking for.
      </h3>
      <h3 className='page-not-found__text'>
        Please click{' '}
        <a href='/' style={{ font: 'bold' }}>
          HERE
        </a>{' '}
        to return to the home page.
      </h3>
      <img
        className='page-not-found__image'
        src='https://pair-yo-pet-aws.s3-us-west-1.amazonaws.com/pre-saved-images/lost-dog.jpg'
        alt='Sorry Lost Doggo says Page Not Found'
      />
    </div>
  );
}
