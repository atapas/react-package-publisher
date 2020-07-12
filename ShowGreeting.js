import moment from 'moment';
import { Clock } from 'react-feather';

const ShowGreeting = props => {
    moment.locale(navigator.languages[0].toLowerCase());
    const userName = props.userName;
    return (
        
        <>
        {
            (userName && userName.trim().length > 0) ?
            
            <div className="greetings">
                <h3>Hi {userName}, Welcome! The Time is,</h3>
                <Clock color="green" size={48} /> {' '}
                { moment().format('LLLL')}
            </div> : <span className="error">Oh Boy, We need your Name!</span>
        }
        </>
    )
};