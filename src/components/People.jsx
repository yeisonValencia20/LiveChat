
import '../styles/people.css';

export const People = ({ users, handleChatSelected }) => {
    return(
        <>
            {
                users.map( person => {
                    return (
                        <div 
                            className="box" 
                            id={person.id} 
                            key={person.id} 
                            onClick={() => handleChatSelected(person.id)}
                        >
                            <span className="name">
                                {person.name}
                            </span>
                        </div>
                    )
                })
            }
        </>        
    )
}
