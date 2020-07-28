const PageFullContent: React.FC = props => {

    return <div className="flex flex-col center mx-auto px-4 max-width-1">
            {props.children}
        </div>
}

const ContentWrapper: React.FC = props => <div>{props.children}</div>

export default PageFullContent;