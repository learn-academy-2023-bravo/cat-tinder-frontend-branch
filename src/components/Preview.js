const Preview = ({ source }) => {
    function validImage(url) {
        // console.log(url);
        return fetch(url, { method: 'HEAD' }).then(res => {
            // console.log(res.headers.get('Content-Type'));
            return res.headers.get('Content-Type').startsWith('image')
        })
    }
    console.log(validImage(source));
    // if (validImage(source)) {
    //     return (
    //         <img className='preview' src={source} />
    //     )
    // }
    // return (
    //     <span>Invalid image URL: {source}</span>
    // )
}

export default Preview