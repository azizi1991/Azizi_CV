/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

    en: {

        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            education: "Education",
            contact: "Contact"
        },

        hero: {
            available: "Available for selected projects",
            kicker: "FULL-STACK DEVELOPER · PRODUCT BUILDER · AI",
            title1: "I build",
            title2: "digital products",
            title3: "from idea to MVP.",
            subtitle:
                "Full-Stack Developer and Product Builder with 5+ years of experience turning real business problems into practical, scalable digital solutions.",
            viewWork: "View My Work",
            downloadCV: "Download CV"
        },

        about: {
            title: "About Me",
            subtitle: "I build products, not just code.",
            description1:
                "I am a Full-Stack Developer, Product Builder and Business Analyst focused on transforming real-world business problems into practical digital products.",
            description2:
                "My approach combines technical development, product thinking, UX/UI analysis and AI-assisted development to move quickly from an idea to a usable MVP.",
            feature1: "Product Thinking",
            feature2: "Rapid MVP Development",
            feature3: "AI-Assisted Development"
        },

        stats: {
            experience: "+ Years Experience",
            projects: "+ Projects",
            mentored: "+ Developers Mentored",
            focus: "Product-First Mindset"
        },

        experience: {
            title: "Experience",
            subtitle:
                "Building products across technology, business and AI.",

            freelance: {
                title: "Freelance — Full-Stack Developer & Product Builder",
                company: "Independent & Organizational Projects",
                item1:
                    "Designed and developed school management, CRM and automation systems.",
                item2:
                    "Built booking, payment and management platforms.",
                item3:
                    "Developed AI-powered products and MVPs.",
                item4:
                    "Worked from requirements analysis through deployment and support."
            },

            community: {
                title: "Front-End & Product Support",
                item1:
                    "Developed the front-end of a community platform for Iranians living in Europe.",
                item2:
                    "Improved mobile-first UX/UI and accessibility.",
                item3:
                    "Defined features and technical specifications with the product team.",
                item4:
                    "Participated in beta testing and product iteration."
            },

            mentor: {
                title: "Business & Programming Mentor",
                item1:
                    "Mentored more than 100 developers.",
                item2:
                    "Helped developers build practical projects and MVPs.",
                item3:
                    "Supported career paths, learning plans and market-oriented development."
            }
        },

        skills: {
            title: "Skills & Technologies",
            subtitle:
                "The tools I use to turn ideas into products.",
            backend: "Backend",
            frontend: "Frontend",
            ai: "AI & Automation",
            product: "Product & UX"
        },

        projects: {
            title: "Selected Projects",
            subtitle:
                "From business problems to working products.",
            view: "View Case Study"
        },

        project: {

            stp: {
                title: "STP Analysis Tool",
                description:
                    "Web application for Segmentation, Targeting and Positioning analysis with AI-generated reports."
            },

            school: {
                title: "School Management System",
                description:
                    "Management platform designed to reduce manual administrative processes."
            },

            translator: {
                title: "AI Voice Translator",
                description:
                    "AI-powered tool for converting Persian speech into English text."
            },

            migration: {
                title: "AI Migration Assistant",
                description:
                    "AI assistant concept for migration consultation, data transfer and validation."
            },

            qr: {
                title: "QR Restaurant Menu",
                description:
                    "Digital restaurant menu and ordering experience based on QR technology."
            },

            booking: {
                title: "Online Booking System",
                description:
                    "Fast booking platform with management panel and automated workflow."
            }

        },

        github: {
            title: "Explore my code & experiments."
        },

        education: {
            title: "Education & Certifications",
            subtitle:
                "Continuous learning across software, AI and business.",
            degree: "MASTER'S DEGREE",
            master: "Software Engineering",
            dba: "Professional Business Administration",
            certifications: "Certifications & Courses"
        },

        contact: {
            title: "Let's Build Something",
            subtitle:
                "Have an idea, product or problem to solve?",
            description:
                "I am interested in meaningful projects, product development, AI-powered solutions and opportunities where technology can create real value.",
            name: "Your Name",
            email: "Email",
            message: "Message",
            send: "Send Message"
        },

        footer: {
            description:
                "Full-Stack Developer · Product Builder · AI"
        }

    },


    fa: {

        nav: {
            home: "خانه",
            about: "درباره من",
            experience: "تجربه",
            skills: "مهارت‌ها",
            projects: "پروژه‌ها",
            education: "تحصیلات",
            contact: "تماس"
        },

        hero: {
            available: "آماده همکاری روی پروژه‌های منتخب",
            kicker: "توسعه‌دهنده فول‌استک · سازنده محصول · هوش مصنوعی",
            title1: "من",
            title2: "محصولات دیجیتال",
            title3: "را از ایده تا MVP می‌سازم.",
            subtitle:
                "توسعه‌دهنده فول‌استک و سازنده محصول با بیش از ۵ سال تجربه در تبدیل مسائل واقعی کسب‌وکار به راهکارهای دیجیتال کاربردی و مقیاس‌پذیر.",
            viewWork: "مشاهده نمونه‌کارها",
            downloadCV: "دانلود رزومه"
        },

        about: {
            title: "درباره من",
            subtitle: "من فقط کد نمی‌زنم؛ محصول می‌سازم.",
            description1:
                "من توسعه‌دهنده فول‌استک، سازنده محصول و تحلیلگر کسب‌وکار هستم و تمرکزم تبدیل مسائل واقعی کسب‌وکار به محصولات دیجیتال کاربردی است.",
            description2:
                "رویکرد من ترکیبی از توسعه نرم‌افزار، تفکر محصول، تحلیل UX/UI و استفاده از هوش مصنوعی برای حرکت سریع از ایده به یک MVP قابل استفاده است.",
            feature1: "تفکر محصول‌محور",
            feature2: "توسعه سریع MVP",
            feature3: "توسعه با کمک هوش مصنوعی"
        },

        stats: {
            experience: "+ سال تجربه",
            projects: "+ پروژه",
            mentored: "+ توسعه‌دهنده منتور شده",
            focus: "نگاه محصول‌محور"
        },

        experience: {
            title: "تجربه حرفه‌ای",
            subtitle:
                "تجربه در ساخت محصول، فناوری، کسب‌وکار و هوش مصنوعی.",

            freelance: {
                title: "فریلنسر — توسعه‌دهنده فول‌استک و سازنده محصول",
                company: "پروژه‌های مستقل و سازمانی",
                item1:
                    "طراحی و توسعه سیستم مدیریت مدرسه، CRM و اتوماسیون.",
                item2:
                    "طراحی سیستم‌های رزرو، پرداخت و پنل‌های مدیریتی.",
                item3:
                    "توسعه محصولات و MVPهای مبتنی بر هوش مصنوعی.",
                item4:
                    "فعالیت از مرحله تحلیل نیازمندی تا توسعه، استقرار و پشتیبانی."
            },

            community: {
                title: "توسعه‌دهنده فرانت‌اند و همکار محصول",
                item1:
                    "توسعه فرانت‌اند یک پلتفرم کامیونیتی برای ایرانیان مقیم اروپا.",
                item2:
                    "بهینه‌سازی UX/UI، طراحی موبایل‌محور و دسترسی‌پذیری.",
                item3:
                    "همکاری با تیم محصول برای تعریف ویژگی‌ها و مشخصات فنی.",
                item4:
                    "مشارکت در تست بتا و بهبود محصول."
            },

            mentor: {
                title: "منتور کسب‌وکار و برنامه‌نویسی",
                item1:
                    "منتورینگ بیش از ۱۰۰ توسعه‌دهنده.",
                item2:
                    "کمک به توسعه‌دهندگان برای ساخت پروژه‌های واقعی و MVP.",
                item3:
                    "همراهی در مسیر یادگیری، شغلی و توسعه محصول."
            }
        },

        skills: {
            title: "مهارت‌ها و تکنولوژی‌ها",
            subtitle:
                "ابزارهایی که با آن‌ها ایده‌ها را به محصول تبدیل می‌کنم.",
            backend: "بک‌اند",
            frontend: "فرانت‌اند",
            ai: "هوش مصنوعی و اتوماسیون",
            product: "محصول و UX"
        },

        projects: {
            title: "پروژه‌های منتخب",
            subtitle:
                "از حل مسئله کسب‌وکار تا ساخت محصول واقعی.",
            view: "مشاهده Case Study"
        },

        project: {

            stp: {
                title: "ابزار تحلیل STP",
                description:
                    "وب‌اپلیکیشن تحلیل بخش‌بندی، هدف‌گذاری و جایگاه‌یابی با تولید گزارش تحلیلی مبتنی بر هوش مصنوعی."
            },

            school: {
                title: "سیستم مدیریت مدرسه",
                description:
                    "سامانه مدیریت مدرسه با هدف کاهش فرآیندهای دستی و افزایش بهره‌وری."
            },

            translator: {
                title: "مترجم صوتی هوش مصنوعی",
                description:
                    "ابزار مبتنی بر هوش مصنوعی برای تبدیل صدای فارسی به متن انگلیسی."
            },

            migration: {
                title: "دستیار هوشمند مهاجرت",
                description:
                    "کانسپت دستیار هوشمند برای مشاوره مهاجرت و انتقال و اعتبارسنجی داده‌ها."
            },

            qr: {
                title: "منوی دیجیتال QR",
                description:
                    "سیستم منوی دیجیتال و سفارش رستوران مبتنی بر QR Code."
            },

            booking: {
                title: "سیستم رزرو آنلاین",
                description:
                    "سامانه رزرو آنلاین سریع با پنل مدیریت و فرآیندهای خودکار."
            }

        },

        github: {
            title: "کدها و پروژه‌های من را در GitHub ببینید."
        },

        education: {
            title: "تحصیلات و گواهینامه‌ها",
            subtitle:
                "یادگیری مستمر در حوزه نرم‌افزار، هوش مصنوعی و کسب‌وکار.",
            degree: "کارشناسی ارشد",
            master: "مهندسی نرم‌افزار",
            dba: "مدیریت حرفه‌ای کسب‌وکار",
            certifications: "دوره‌ها و گواهینامه‌ها"
        },

        contact: {
            title: "بیایید چیزی بسازیم",
            subtitle:
                "ایده، محصول یا مسئله‌ای برای حل کردن دارید؟",
            description:
                "به پروژه‌های معنادار، توسعه محصول، راهکارهای مبتنی بر هوش مصنوعی و فرصت‌هایی که فناوری بتواند ارزش واقعی ایجاد کند علاقه‌مندم.",
            name: "نام شما",
            email: "ایمیل",
            message: "پیام",
            send: "ارسال پیام"
        },

        footer: {
            description:
                "توسعه‌دهنده فول‌استک · سازنده محصول · هوش مصنوعی"
        }

    }

};


/* =====================================================
   PROJECT DETAILS
===================================================== */

const projectDetails = {

    stp: {

        category: "AI · Data · Marketing",

        technologies: [
            "Python",
            "Flask",
            "JavaScript",
            "Cohere AI",
            "ReportLab"
        ],

        role: {
            en: "Full-Stack Developer",
            fa: "توسعه‌دهنده فول‌استک"
        },

        result: {
            en:
                "A web-based analysis tool capable of generating structured marketing analysis and PDF reports.",
            fa:
                "یک ابزار تحت وب برای تحلیل بازاریابی و تولید گزارش ساختاریافته و PDF."
        },

        link:
            "https://zahradev1991.github.io/stp-analysis-tool/"

    },


    school: {

        category: "SaaS · Management",

        technologies: [
            "Laravel",
            "PHP",
            "MySQL",
            "Vue.js"
        ],

        role: {
            en: "Full-Stack Developer & Product Designer",
            fa: "توسعه‌دهنده فول‌استک و طراح محصول"
        },

        result: {
            en:
                "A management platform designed to reduce repetitive administrative work.",
            fa:
                "سامانه‌ای برای کاهش فعالیت‌های اداری تکراری و افزایش بهره‌وری."
        }

    },


    translator: {

        category: "AI · Voice",

        technologies: [
            "AI",
            "Python",
            "Speech Recognition",
            "NLP"
        ],

        role: {
            en: "AI Product Developer",
            fa: "توسعه‌دهنده محصول هوش مصنوعی"
        },

        result: {
            en:
                "A concept for converting Persian voice input into English text.",
            fa:
                "ابزاری برای تبدیل ورودی صوتی فارسی به متن انگلیسی."
        }

    },


    migration: {

        category: "AI · MVP",

        technologies: [
            "LLM",
            "AI",
            "Python",
            "MVP"
        ],

        role: {
            en: "Product Builder",
            fa: "سازنده محصول"
        },

        result: {
            en:
                "An AI assistant concept focused on migration consultation and data validation.",
            fa:
                "کانسپت دستیار هوشمند برای مشاوره مهاجرت و اعتبارسنجی داده‌ها."
        }

    },


    qr: {

        category: "Web · Restaurant",

        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "QR"
        ],

        role: {
            en: "Full-Stack Developer",
            fa: "توسعه‌دهنده فول‌استک"
        },

        result: {
            en:
                "A digital menu experience designed for restaurant customers.",
            fa:
                "تجربه منوی دیجیتال برای مشتریان رستوران."
        }

    },


    booking: {

        category: "Automation · SaaS",

        technologies: [
            "Laravel",
            "PHP",
            "MySQL",
            "API"
        ],

        role: {
            en: "Full-Stack Developer",
            fa: "توسعه‌دهنده فول‌استک"
        },

        result: {
            en:
                "A fast online booking workflow with management capabilities.",
            fa:
                "فرآیند سریع رزرو آنلاین به همراه امکانات مدیریتی."
        }

    }

};


/* =====================================================
   LANGUAGE HELPERS
===================================================== */

let currentLanguage =
    localStorage.getItem("portfolioLanguage") || "en";


function getNestedValue(object, path) {

    return path
        .split(".")
        .reduce(
            (value, key) =>
                value && value[key],
            object
        );

}


function translatePage() {

    const dictionary =
        translations[currentLanguage];

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            const value =
                getNestedValue(dictionary, key);

            if (value !== undefined) {

                element.textContent = value;

            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            const value =
                getNestedValue(dictionary, key);

            if (value !== undefined) {

                element.placeholder = value;

            }

        });


    document.documentElement.lang =
        currentLanguage;

    document.body.classList.toggle(
        "rtl",
        currentLanguage === "fa"
    );


    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === currentLanguage
            );

        });

}


function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    localStorage.setItem(
        "portfolioLanguage",
        language
    );

    translatePage();

}


/* =====================================================
   LANGUAGE BUTTONS
===================================================== */

document
    .querySelectorAll(".lang-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setLanguage(
                    button.dataset.lang
                );

            }
        );

    });


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuToggle =
    document.getElementById(
        "mobileMenuToggle"
    );

const navMenu =
    document.getElementById(
        "navMenu"
    );


mobileMenuToggle.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "active"
        );

    }
);


document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* =====================================================
   PARTICLES
===================================================== */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );

    const count =
        window.innerWidth < 700
            ? 25
            : 55;


    for (let i = 0; i < count; i++) {

        const particle =
            document.createElement(
                "span"
            );

        particle.className =
            "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            10 + Math.random() * 20 + "s";

        particle.style.animationDelay =
            Math.random() * 15 + "s";

        particle.style.opacity =
            .15 + Math.random() * .45;

        container.appendChild(
            particle
        );

    }

}


/* =====================================================
   COUNTERS
===================================================== */

function animateCounters() {

    const counters =
        document.querySelectorAll(
            ".stat-number"
        );


    counters.forEach(counter => {

        const target =
            Number(
                counter.dataset.target
            );

        let current = 0;

        const increment =
            Math.max(
                1,
                Math.ceil(target / 50)
            );


        const update = () => {

            current += increment;

            if (current >= target) {

                counter.textContent =
                    target;

                return;

            }

            counter.textContent =
                current;

            requestAnimationFrame(
                update
            );

        };


        update();

    });

}


/* =====================================================
   INTERSECTION OBSERVER
===================================================== */

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    animateCounters();

                    counterObserver.disconnect();

                }

            });

        },
        {
            threshold: .4
        }
    );


const statsSection =
    document.querySelector(
        ".stats-grid"
    );


if (statsSection) {

    counterObserver.observe(
        statsSection
    );

}


/* =====================================================
   PROJECT MODAL
===================================================== */

const projectModal =
    document.getElementById(
        "projectModal"
    );

const modalBody =
    document.getElementById(
        "modalBody"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );


function openProject(projectId) {

    const project =
        projectDetails[projectId];

    if (!project) {
        return;
    }


    const dictionary =
        translations[currentLanguage];

    const projectTranslation =
        dictionary.project[projectId];


    const role =
        project.role[currentLanguage];

    const result =
        project.result[currentLanguage];


    let techHTML = "";

    project.technologies
        .forEach(technology => {

            techHTML +=
                `<span>${technology}</span>`;

        });


    let linkHTML = "";

    if (project.link) {

        linkHTML = `
            <a
                class="modal-link"
                href="${project.link}"
                target="_blank"
                rel="noopener noreferrer">
                ${currentLanguage === "fa"
                    ? "مشاهده نسخه آنلاین ↗"
                    : "View Live Project ↗"}
            </a>
        `;

    }


    modalBody.innerHTML = `

        <span class="modal-category">
            ${project.category}
        </span>

        <h2 class="modal-title">
            ${projectTranslation.title}
        </h2>

        <p class="modal-description">
            ${projectTranslation.description}
        </p>

        <div class="modal-section">

            <h4>
                ${currentLanguage === "fa"
                    ? "نقش من"
                    : "MY ROLE"}
            </h4>

            <p class="modal-description">
                ${role}
            </p>

        </div>

        <div class="modal-section">

            <h4>
                ${currentLanguage === "fa"
                    ? "نتیجه"
                    : "RESULT"}
            </h4>

            <p class="modal-description">
                ${result}
            </p>

        </div>

        <div class="modal-section">

            <h4>
                ${currentLanguage === "fa"
                    ? "تکنولوژی‌ها"
                    : "TECHNOLOGIES"}
            </h4>

            <div class="modal-tech">
                ${techHTML}
            </div>

        </div>

        ${linkHTML}

    `;


    projectModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                openProject(
                    card.dataset.project
                );

            }
        );

    });


function closeModal() {

    projectModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeModal
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();

        const email =
            document.getElementById(
                "email"
            ).value.trim();

        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !message
        ) {

            formMessage.textContent =
                currentLanguage === "fa"
                    ? "لطفاً همه فیلدها را پر کنید."
                    : "Please complete all fields.";

            return;

        }


        const subject =
            encodeURIComponent(
                currentLanguage === "fa"
                    ? `پیام از سایت شخصی - ${name}`
                    : `Portfolio message - ${name}`
            );


        const body =
            encodeURIComponent(
                `${message}\n\nFrom: ${name}\nEmail: ${email}`
            );


        window.location.href =
            `mailto:azizizahra6870@gmail.com?subject=${subject}&body=${body}`;


        formMessage.textContent =
            currentLanguage === "fa"
                ? "در حال باز کردن ایمیل..."
                : "Opening your email client...";

    }
);


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const navObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${entry.target.id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },
        {
            rootMargin:
                "-30% 0px -60% 0px"
        }
    );


sections.forEach(section => {

    navObserver.observe(section);

});


/* =====================================================
   YEAR
===================================================== */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();


/* =====================================================
   INITIALIZE
===================================================== */

createParticles();

translatePage();
