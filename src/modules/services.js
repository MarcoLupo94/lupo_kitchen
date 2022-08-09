const services = function(){
    $('#content').empty();
    $('#content').append(
      '<div id="services">\
      <div id="contact-me">\
        <div class="p">Book your experience today or ask for any informations!\
        I will get back to you as soon as possible.</div>\
        <form id="form" method="post">\
        <div id="grid">\
          <div>\
            <label for="user_name">*Name</label>\
            <input type="text" id="user_name" required></input>\
          </div>\
          <div>\
            <label>Number of Guests</label>\
            <input type="number"></input>\
          </div>\
          <div>\
            <label for="user_email">*Email</label>\
            <input type="email" id="user_email" required></input>\
          </div>\
          <div>\
            <label for="user_phone">Phone Number</label>\
            <input type="number" id="user_phone" ></input>\
          </div>\
          </div>\
          <div id="date-form">\
            <label>Date of the event</label>\
            <input type="date"></input>\
          </div>\
          <textarea placeholder="Tell me more about the event..."></textarea>\
        </form>\
        <div class="p">\
        <button id="submit-form" type="submit" form="form" value="Submit">Book your experience</button>\
        </div>\
      </div>\
      </div>');
  };
  export {services};