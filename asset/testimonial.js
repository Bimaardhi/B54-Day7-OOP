class Testimonial {
    image = ""
    content = ""
    author = ""

    constructor(image, content, author) {
        this.image = image
        this.content = content
        this.author = author

    }

    html() {
        throw new error("You sould use one of 'AuthorTestimonial' or 'COmpanyTestimonial'")
    }
}

class AuthorTestimonial extends Testimonial {
    html() {
        return `<div class="testimonial">
        <img src="${this.image}" class="profile-testimonial" />
        <p class="quote">"${this.content}"</p>
        <p class="author">- ${this.author}</p>
        </div>`
    }
}

class COmpanyTestimonial extends Testimonial {
    html() {
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.content}"</p>
            <p class="author">"${this.author} Company</p>
            </div>`
    }
}

const testimonial1 = new AuthorTestimonial("https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Menyala abangkuh!", "Bima Ardhiansyah")

const testimonial2 = new AuthorTestimonial("https://images.pexels.com/photos/21282102/pexels-photo-21282102/free-photo-of-bunga.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "Semoga hari harimu bahagia!", "Bima Ardhiansyah")

const testimonial3 = new AuthorTestimonial("https://images.pexels.com/photos/3612885/pexels-photo-3612885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Semoga beruntung!", "Bima ardhiansyah")

const testimonials = [testimonial1, testimonial2, testimonial3]

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML

