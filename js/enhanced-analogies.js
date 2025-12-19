// Enhanced Content with Funny Agriculture Analogies
// This file extends the base content with detailed, humorous analogies

// Add CSS for analogy boxes
const analogyBoxStyles = `
<style>
.analogy-box {
    background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
    border-left: 5px solid #f39c12;
    padding: 20px;
    border-radius: 12px;
    margin: 20px 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.analogy-box h3 {
    color: #d35400;
    margin-top: 0;
}
.analogy-box p {
    line-height: 1.8;
}
.analogy-box em {
    color: #e67e22;
    font-weight: 600;
}
</style>
`;

// Enhanced handout methods - add these to your content.js
function getEnhancedHandout1_1() {
    return analogyBoxStyles + `
        <h2>🌾 Introduction to AI/ML & Agriculture</h2>
        
        <div class="a analogy-box">
            <h3>🤣 The "Smart Scarecrow" Analogy</h3>
            <p><strong>Traditional Scarecrow:</strong> Just stands there looking scary. Birds eventually realize it's fake. <em>(Like old farming methods - fixed rules that stop working)</em></p>
            
            <p><strong>AI Scarecrow:</strong> Has a brain! It sees a crow land, waves its arms. Sees a sparrow, stays still (they eat bugs, we like sparrows!). <em>(Makes decisions based on what it sees)</em></p>
            
            <p><strong>Machine Learning Scarecrow:</strong> First day, it scares everything. By day 10, after watching which birds actually damage crops, it only scares the bad ones. <em>(Learns from experience!)</em></p>
            
            <p><strong>Deep Learning Scarecrow:</strong> Can spot the difference between a crow carrying a kernel of corn vs. just flying by. Has "deep vision" like a hawk! <em>(Super detailed pattern recognition)</em></p>
            
            <p><em>Bonus:</em> Your grandfather's scarecrow = Traditional Programming. Your AI scarecrow = The future of farming! 🚜🤖</p>
        </div>
        
        <h3>💡 Real Example: Blue River Technology</h3>
        <p><strong>"See & Spray":</strong> A tractor with AI eyes that can tell weeds from wheat better than your uncle who's been farming for 40 years! It sprays ONLY the weeds, saving 90% of herbicide.</p>
        
        <h3>📝 Quick Check</h3>
        <p><strong>Q:</strong> If your scarecrow could learn, what's the first bad habit it would copy from you? 😄</p>
    `;
}

// Inject enhanced content into the page
document.addEventListener('DOMContentLoaded', function () {
    // Override the original getHandout methods with enhanced versions
    if (typeof courseContent !== 'undefined') {
        // Store originals
        const originalHandouts = {};

        // Enhanced versions
        const enhanced = {
            '1_1': getEnhancedHandout1_1,
            // Add more as needed
        };

        // Monkey-patch the handout getters
        const original Get1_1 = courseContent.getHandout1_1;
        courseContent.getHandout1_1 = function () {
            return getEnhancedHandout1_1();
        };
    }
});
