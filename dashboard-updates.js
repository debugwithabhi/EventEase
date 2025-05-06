 // Optional: Dynamic content loading
 document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.notification-content');
    
    // Sample function to add new notification
    function addNotification(type, message) {
      const badges = {
        'register': {class: 'bg-success', text: 'NEW'},
        'payment': {class: 'bg-info', text: 'PAYMENT'},
        'attend': {class: 'bg-warning', text: 'ATTENDED'}
      };
      
      const notification = document.createElement('div');
      notification.className = 'p-3 border-bottom';
      notification.innerHTML = `
        <div class="d-flex">
          <span class="badge ${badges[type].class} me-2">${badges[type].text}</span>
          <small class="text-muted">Just now</small>
        </div>
        <div>${message}</div>
      `;
      
      container.prepend(notification);
    }
    
    // Simulate real-time updates (replace with actual data fetching)
    setInterval(() => {
      const sampleMessages = [
        {type: 'register', msg: 'New user registered for Event'},
        {type: 'payment', msg: 'Payment received from attendee'},
        {type: 'attend', msg: 'Participant checked into session'}
      ];
      const random = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
      addNotification(random.type, random.msg);
    }, 10000); // Add new notification every 10 seconds
  });