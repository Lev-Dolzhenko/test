var movableDiv = document.getElementById("movableDiv");

      var isDragging = false;
      var startX = 0, startY = 0;

      movableDiv.addEventListener("mousedown", function(event) {
        isDragging = true;
        startX = event.clientX - movableDiv.offsetLeft;
        startY = event.clientY - movableDiv.offsetTop;
      });

      document.addEventListener("mouseup", function() {
        isDragging = false;
      });

      document.addEventListener("mousemove", function(event) {
        event.preventDefault();
        if (!isDragging) return;
        movableDiv.style.left = event.clientX - startX + 'px';
        movableDiv.style.top = event.clientY - startY + 'px';
      });

      