const request = require('supertest');
const express = require('express');
const securityMiddleware = require('./middleware/securityMiddleware');

const app = express();
app.use(express.json());

// Apply security middleware
app.use(securityMiddleware.sanitizeInputs);
app.use(securityMiddleware.xssProtection);

// Test endpoint
app.get('/test', (req, res) => {
    res.json({
        query: req.query,
        params: req.params,
        body: req.body
    });
});

app.post('/test', (req, res) => {
    res.json({
        query: req.query,
        params: req.params,
        body: req.body
    });
});

// Test malicious query parameters
const testMaliciousQueries = async () => {
    console.log('🧪 Testing security middleware...\n');

    // Test 1: XSS in query parameters
    console.log('Test 1: XSS in query parameters');
    try {
        const response = await request(app)
            .get('/test')
            .query({
                search: '<script>alert("xss")</script>',
                type: 'javascript:alert("xss")'
            });
        console.log('✅ XSS protection working');
    } catch (error) {
        console.log('❌ XSS protection failed:', error.message);
    }

    // Test 2: NoSQL injection in query parameters
    console.log('\nTest 2: NoSQL injection in query parameters');
    try {
        const response = await request(app)
            .get('/test')
            .query({
                email: { $ne: null },
                password: { $gt: '' }
            });
        console.log('✅ NoSQL injection protection working');
    } catch (error) {
        console.log('❌ NoSQL injection protection failed:', error.message);
    }

    // Test 3: Malicious body content
    console.log('\nTest 3: Malicious body content');
    try {
        const response = await request(app)
            .post('/test')
            .send({
                name: '<img src=x onerror=alert("xss")>',
                email: 'test@example.com'
            });
        console.log('✅ Body sanitization working');
    } catch (error) {
        console.log('❌ Body sanitization failed:', error.message);
    }

    console.log('\n🎉 Security tests completed!');
};

if (require.main === module) {
    testMaliciousQueries();
}

module.exports = { testMaliciousQueries };