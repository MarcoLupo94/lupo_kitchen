const services = function(){
    $('#content').empty();
    $('#content').append(
      '<div id="services">\
      <div id="contact-me">\
        <div class="p">Book your experience today or ask for any informations!\
        I will get back to you as soon as possible.</div>\
        <form id="form" method="post">\
          <input type="text"></input>\
          <label>Name</label>\
          <input type="number"></input>\
          <label>Number of Guests</label>\
          <input type="date"></input>\
          <label>Date of the event</label>\
          <textarea>Tell me more about the event...</textarea>\
        </form>\
        <div class="p">\
        <button id="submit">Book your experience</button>\
        </div>\
      </div>\
      </div>');
  };
  export {services};