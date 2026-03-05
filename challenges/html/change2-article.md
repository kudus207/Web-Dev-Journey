Got confused on how <article></article> is used
<!-- ERROR -->
        <section id="upcoming-events">  
            <article>
                <h2>Upcoming Events</h2>
                <h3>AI & Machine Learning Conference 2024</h3>
                <p>Join us for deep dive into the latest advancements in artificial intelligence and machine learning.
                    Industry leaders will share insights and case studies on how AI is transforming various sectors.</p>
                <p>Date: August 10, 2024</p>
            </article>
            <article>
                <h3>Web Development Bootcamp</h3>
                <p>A hans-on workshop designed for developers looking to enhance their skills in modern web technologies
                    including React, Node.js, and GraphQL. Perfect for both beginners and experienced developers.</p>
                <p>Date: September 5, 2024</p>
            </article>
        </section>

   # <!-- FIX -->
   # h2 should not be inside the article, as it is the sub-heading of the page, refer to day04-html event-hub for full understanding
            <section id="upcoming-events">
            <h2>Upcoming Events</h2>
            <article>
                <h3>AI & Machine Learning Conference 2024</h3>
                <p>Join us for deep dive into the latest advancements in artificial intelligence and machine learning.
                    Industry leaders will share insights and case studies on how AI is transforming various sectors.</p>
                <p>Date: August 10, 2024</p>
            </article>
            <article>
                <h3>Web Development Bootcamp</h3>
                <p>A hans-on workshop designed for developers looking to enhance their skills in modern web technologies
                    including React, Node.js, and GraphQL. Perfect for both beginners and experienced developers.</p>
                <p>Date: September 5, 2024</p>
            </article>
        </section>