const db = require('../config/db');

const Waste = {
    getAll: (callback) => {
        const query = 'SELECT * FROM Waste';
        db.query(query, callback);
    },
    create: (user_id, location, address, weight, waste_type, image_url, points_awarded, callback) => {
        const query = 'INSERT INTO Waste (user_id, location, address, weight, waste_type, image_url, points_awarded, shipping_status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)';
        db.query(query, [user_id, location, address, weight, waste_type, image_url, points_awarded, 'Pending'], callback);
    },
    update: (id, user_id, location, address, weight, waste_type, image_url, points_awarded, shipping_status, callback) => {
        const query = 'UPDATE Waste SET user_id = ?, location = ?, address = ?, weight = ?, waste_type = ?, image_url = ?, points_awarded = ?, shipping_status = ?, updated_at = CURRENT_TIMESTAMP WHERE waste_id = ?';
        db.query(query, [user_id, location, address, weight, waste_type, image_url, points_awarded, shipping_status, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM Waste WHERE waste_id = ?';
        db.query(query, [id], callback);
    },
    updateShippingStatus: (id, shipping_status, callback) => {
        const query = 'UPDATE Waste SET shipping_status = ?, updated_at = CURRENT_TIMESTAMP WHERE waste_id = ?';
        db.query(query, [shipping_status, id], callback);
    },
    getWasteById: (id, callback) => {
        const query = 'SELECT * FROM Waste WHERE waste_id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Waste;
