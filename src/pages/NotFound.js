import notFound from "../assets/NotFoundTree.jpeg"

const NotFound = () => {
    return (
        <>
            <div class="notFoundBox">
                <h3>Page not found, you might be lost</h3>
                <img src={notFound} height="400" />
            </div>
        </>
    )
}

export default NotFound