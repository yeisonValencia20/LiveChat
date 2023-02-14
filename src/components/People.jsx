
import '../styles/people.css';

export const People = ({ people }) => {
    return (
        <div className="box">
            {
                people.map( person => {
                    return (
                        <span key={person.id} className="name">
                            {person.name}
                        </span>
                    )
                })
            }
        </div>
    )
}
