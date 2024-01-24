const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/funny-sign.jpg" alt="Funny Error Sign"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@austinchan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Austin Chan</a> on <a href="https://unsplash.com/photos/this-is-the-sign-youve-been-looking-for-neon-signage-ukzHlkoz1IE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404