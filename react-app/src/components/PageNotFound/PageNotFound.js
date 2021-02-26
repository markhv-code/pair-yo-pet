import './PageNotFound.css';

export default function PageNotFound() {
    return (
        <div className='page-not-found'>
            <h1 className='page-not-found__header'>Page Not Found</h1>
            <img
                className='page-not-found__image'
                src='../../../images/lost-dog.jpg'
                alt='Sorry Lost Doggo says Page Not Found'
            />
        </div>
    );
}