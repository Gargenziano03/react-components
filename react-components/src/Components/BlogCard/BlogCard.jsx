import BlogImg from '../../assets/image/film.jpg'
export default function BlogCard() {
    return (
        <div className="blog-card">
            <img src={BlogImg} alt="blog" />
            <div className="details">
                <h2>Film</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad cupiditate necessitatibus consequuntur iusto possimus? Reiciendis id nisi dicta nesciunt aliquam nemo temporibus
                    suscipit obcaecati eum, mollitia quasi voluptatem, ex exercitationem.
                </p>

                <Button />
            </div>
        </div>
    )
}