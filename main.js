$(function () {

  $(".about-menu").mouseenter(function () {
    $(".submenu").hide()
    $(".about-submenu").show()
  })

  $(".resume-menu").mouseenter(function () {
    $(".submenu").hide()
    $(".resume-submenu").show()
  })

  $(".work-menu").mouseenter(function () {
    $(".submenu").hide()
    $(".work-submenu").show()
  })

  $(".contact-menu").mouseenter(function () {
    $(".submenu").hide()
    $(".contact-submenu").show()
  })

  $(".hamburger-menu").mouseenter(function () {
    $(".submenu").hide()
    $(".hamburger-submenu").show()
  })

  $(".submenu").mouseleave(function () {
    $(".submenu").hide()
  });

  $("nav").mouseleave(function () {
    $(".submenu").hide()
  });

 
})