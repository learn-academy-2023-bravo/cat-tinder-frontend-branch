import notFound from "../assets/NotFoundTree.jpeg"

const NotFound = () => {
    return (
        <>
            <div className="notFoundBox">
                <h3>Page not found, you might be lost</h3>
                <img src={notFound} height="400" alt='lonely tree' />
            </div>
        </>
    )
}

export default NotFound
