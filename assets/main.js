/* Copyright (c) 2021 Club RockÉTS (MIT License) */
$(function () {
    /* Rocket tabs */
    $('.rocket-tab-link').each(function (index, element) {
        $(this).on('click', function (event) {
            target = $(this).attr("data-target");

            /* Highlight only selected tab link */
            $('.rocket-tab-link').each(function (index, element) {
                $(this).removeClass('tab-active');
                if ($(this).attr('data-target') == target) {
                    $(this).addClass('tab-active');
                }
            });

            /* Hide all tab contents except for selected tab */
            $('.rocket-tab-content').each(function (index, element) {
                $(this).removeClass('tab-active');
                if (this.id == 'rocket-tab-' + target) {
                    $(this).addClass('tab-active');
                }
            });
        });
    });

    /* Rocket-tab left/right focus at low sizes */
    $('#rocket-switch-side').on('click', function (event) {
        $('.rocket-tab-content').each(function (index, element) {
            if ($(this).hasClass('rocket-left-focus')) {
                $(this).removeClass('rocket-left-focus');
                $(this).addClass('rocket-right-focus');
            }
            else {
                    $(this).removeClass('rocket-right-focus');
                $(this).addClass('rocket-left-focus');
            }
        });
    });

    $("#gallery-modal-content").on('click', function (event) {
        $("#gallery-modal-background").css('display', 'none');
    });

    $('header a[href*="#"').click(function(event) {
        var target = $(this.hash);
        event.preventDefault();
        console.log(target);
        console.log("" + target.offset().top + " - " + $('header').height() + " = " + (target.offset().top - $('header').height()));
        $('main').scrollTop($('main').scrollTop() + target.offset().top - $('header').height());
        
    })
});


function scroller() {
    var height = $(window).height();
    if ($('main').scrollTop() > height - $('header').height()) {
        $('header').addClass('scrolled');
    }
    else {
        $('header').removeClass('scrolled');
    }
    var progress = 100 * ($('main').scrollTop() / ($('main')[0].scrollHeight - height))
    $('#progress').css({'width': progress + '%'});
}

var gallery = new Vue({
    el: '#gallery',
    data: {
        gallery: []
    },

    mounted() {
        this.fetchState()
    },

    methods: {
        showImage: function(id) {
            var img = document.getElementById('gallery-modal-content')
                              .getElementsByTagName('img')[0];
            img.setAttribute('src', '/assets/media/gallery/hires/' + id + '.jpg')
            img.onload = function () {
                document.getElementById('gallery-modal-background').style = 'display: block';
            }
        },
        fetchState: function(){ 
            axios.get('/assets/gallery.json').then(response => {
                this.gallery = response.data.gallery.reverse()
            }).catch(error => {
                console.log('error', error.response.data)
            });
        }
    }
})

var partners = new Vue({
    el: '#partners',
    data: {
        partners: {
            commandants: [],
            pilotes: [],
            specialistes: [],
            ingenieurs: [],
            astronautes: [],
            experts: []
        }
    },

    mounted() {
        this.fetchState()
    },

    methods: {
        fetchState: function(){ 
            axios.get('/assets/partners.json').then(response => {
                this.partners = response.data.partners
            }).catch(error => {
                console.log('error', error.response.data)
            });
        }
    }
})