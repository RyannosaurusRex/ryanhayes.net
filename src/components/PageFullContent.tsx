const PageFullContent: React.FC = props => {

    return <div className="d-block center mx-auto px-4 mb-auto">
            {props.children}
        </div>
}

const ContentWrapper: React.FC = props => <div>{props.children}</div>

export default PageFullContent;