export default function Socials(){
    return (
        <div className="flex flex-wrap justify-start gap-3 mt-10 lg:pb-0">
            <a href="https://discord.com/invite/rXKb7rCqjG" target="_blank" rel="noreferrer">
                <button className="inline-flex items-center p-2 text-lg font-semibold rounded bg-dark-100 text-light-100 hover:text-primary-100">
                    <i className="fab fa-discord"></i>
                </button>
            </a>

            <a href="https://twitter.com/musixverse" target="_blank" rel="noreferrer">
                <button className="inline-flex items-center p-2 text-lg font-semibold rounded bg-dark-100 text-light-100 hover:text-primary-100">
                    <i className="fab fa-twitter"></i>
                </button>
            </a>

            <a href="https://www.instagram.com/musixverse/" target="_blank" rel="noreferrer">
                <button className="inline-flex items-center p-2 text-lg font-semibold rounded bg-dark-100 text-light-100 hover:text-primary-100">
                    <i className="fab fa-instagram"></i>
                </button>
            </a>

            <a href="https://www.linkedin.com/company/musixverse/" target="_blank" rel="noreferrer">
                <button className="inline-flex items-center p-2 text-lg font-semibold rounded bg-dark-100 text-light-100 hover:text-primary-100">
                    <i className="fab fa-linkedin"></i>
                </button>
            </a>
        </div>
    );
}