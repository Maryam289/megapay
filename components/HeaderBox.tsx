
const HeaderBox = ({type = "title", title,
    user, subtext}: HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === 'greeting' && (
                <span className="text-accent">
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className="table-header-group">{subtext}</p>
    </div>
  )
}

export default HeaderBox
