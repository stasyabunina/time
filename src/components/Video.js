import '../App.css';
import DateTimePretty from './DateTimePretty';
import DateTime from './DateTime';

function Video(props) {
    const Date = DateTimePretty(DateTime, props.date);

    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            {<Date/>}
        </div>
    )
}

export default Video;