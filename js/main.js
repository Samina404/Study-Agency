$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Navbar Scroll Effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Smooth Scrolling for Nav Links
    $('a.nav-link, a.btn').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    // Form Submission Handling
    $('#visaForm').on('submit', function(e) {
        e.preventDefault();
        
        // Simple visual feedback
        const $btn = $(this).find('button[type="submit"]');
        const originalText = $btn.text();
        
        $btn.html('<i class="fas fa-spinner fa-spin me-2"></i> Sending...');
        $btn.prop('disabled', true);

        // Simulate API call
        setTimeout(function() {
            $btn.html('<i class="fas fa-check me-2"></i> Sent Successfully!');
            $btn.removeClass('btn-primary-custom').addClass('btn-success');
            
            // Reset after 3 seconds
            setTimeout(function() {
                $('#visaForm')[0].reset();
                $btn.text(originalText);
                $btn.removeClass('btn-success').addClass('btn-primary-custom');
                $btn.prop('disabled', false);
            }, 3000);
        }, 1500);
    });

    // Counter Animation (Simple implementation)
    const counters = $('.stats-number');
    let animated = false;

    $(window).scroll(function() {
        const oTop = $('.stats-card').offset().top - window.innerHeight;
        if (!animated && $(window).scrollTop() > oTop) {
            counters.each(function() {
                const $this = $(this);
                const countTo = parseInt($this.text());
                $({ countNum: 0 }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum) + ($this.text().includes('+') ? '+' : ($this.text().includes('%') ? '%' : '')));
                    },
                    complete: function() {
                        $this.text(this.countNum + ($this.text().includes('+') ? '+' : ($this.text().includes('%') ? '%' : '')));
                    }
                });
            });
            animated = true;
        }
    });
});
