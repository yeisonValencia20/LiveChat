
export const Message = ({ className, user, message }) => {
  return (
    <p className={'chat_message ' + className}>{user} {message}</p>
  )
}
