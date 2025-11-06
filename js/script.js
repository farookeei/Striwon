// Countdown Timer
const launchDate = new Date("2025-10-29T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown-wrapper").innerHTML =
      '<h2 style="font-size: 2rem; color: var(--accent);">LAUNCHED!</h2>';
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu when clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Product Image Gallery
const mainImage = document.getElementById("mainProductImage");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    // Remove active class from all thumbnails
    thumbnails.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked thumbnail
    this.classList.add("active");

    // Update main image
    const newImageSrc = this.getAttribute("data-main");
    mainImage.src = newImageSrc;
  });
});

// Load More Images Button
const loadMoreBtn = document.getElementById("loadMoreImages");
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", function () {
    // You can implement a modal or expand functionality here
    alert("More product images coming soon!");
  });
}

// Color Swatch Selection
const colorSwatches = document.querySelectorAll(".color-swatch");

colorSwatches.forEach((swatch) => {
  swatch.addEventListener("click", function () {
    // Remove active class from all swatches
    colorSwatches.forEach((s) => s.classList.remove("active"));

    // Add active class to clicked swatch
    this.classList.add("active");

    // Update color label
    const color = this.getAttribute("data-color");
    const colorLabel = document.querySelector(".selection-label");
    if (colorLabel) {
      colorLabel.textContent = `COLOR - ${color
        .toUpperCase()
        .replace("-", "/")}`;
    }
  });
});

// Size Selection
const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    sizeButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    this.classList.add("active");
  });
});

// Pre-Order Button
const preOrderBtn = document.getElementById("preOrderBtn");
if (preOrderBtn) {
  preOrderBtn.addEventListener("click", function () {
    // Get selected options
    const selectedColor =
      document
        .querySelector(".color-swatch.active")
        ?.getAttribute("data-color") || "black";
    const selectedSize = document
      .querySelector(".size-btn.active")
      ?.getAttribute("data-size");

    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    // Create pre-order data
    const preOrderData = {
      product: "Tunero Training Joggers",
      color: selectedColor,
      size: selectedSize,
      price: "Rs. 6,200.00",
    };

    console.log("Pre-order data:", preOrderData);

    // You can implement your pre-order form modal here
    // For now, we'll show an alert
    alert(
      `Pre-order placed!\nProduct: ${preOrderData.product}\nColor: ${selectedColor}\nSize: ${selectedSize}\n\nWe'll contact you with payment details soon!`
    );
  });
}

// Wishlist Button
const wishlistBtn = document.querySelector(".wishlist-btn");
if (wishlistBtn) {
  let isInWishlist = false;

  wishlistBtn.addEventListener("click", function () {
    isInWishlist = !isInWishlist;
    this.textContent = isInWishlist ? "♥" : "♡";
    this.style.color = isInWishlist ? "var(--accent)" : "inherit";
  });
}

// Accordion Functionality
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const content = document.getElementById(targetId);
    const isActive = this.classList.contains("active");

    // Close all accordions
    accordionButtons.forEach((btn) => {
      btn.classList.remove("active");
      const btnTarget = btn.getAttribute("data-target");
      const btnContent = document.getElementById(btnTarget);
      if (btnContent) {
        btnContent.style.display = "none";
      }
    });

    // Toggle clicked accordion
    if (!isActive) {
      this.classList.add("active");
      if (content) {
        content.style.display = "block";
      }
    }
  });
});

// Share Button
const shareBtn = document.querySelector(".share-btn");
if (shareBtn) {
  shareBtn.addEventListener("click", async function () {
    const shareData = {
      title: "STRIWON - Tunero Training Joggers",
      text: "Check out these amazing performance joggers from STRIWON!",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  });
}

// Video fallback handler
const heroVideo = document.querySelector(".hero-video");
const videoPoster = document.querySelector(".hero-video-poster");

if (heroVideo && videoPoster) {
  heroVideo.addEventListener("error", () => {
    videoPoster.style.display = "block";
    heroVideo.style.display = "none";
  });

  heroVideo.addEventListener("loadeddata", () => {
    videoPoster.style.display = "none";
  });
}

// Parallax effect on hero content
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");

  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - scrolled * 0.0015;
  }
});

// Pack Cards Click Handler
const packCards = document.querySelectorAll(".pack-card");

packCards.forEach((card) => {
  card.addEventListener("click", function () {
    const productTitle = this.querySelector(".pack-card-title").textContent;
    console.log(`Clicked on: ${productTitle}`);
    // You can navigate to individual product pages here
    // window.location.href = `/products/${productTitle.toLowerCase().replace(/\s+/g, '-')}`;
  });
});
