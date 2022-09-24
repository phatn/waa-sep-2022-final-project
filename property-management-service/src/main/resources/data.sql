-- USERS
INSERT INTO users(email)
VALUES
    ('phat@gmail.com'),
    ('thiep@gmail.com'),
    ('yen@gmail.com'),
    ('phong@gmail.com'),
    ('adam@gmail.com'),
    ('michael@gmail.com');



-- PROPERTY

INSERT INTO property(price, num_of_room, property_type, home_type, overview, street, city, zip_code, listed, deleted, available_date, owner_id)
VALUES
    (150000, 3, 'RENT', 'APARTMENT', 'The best apartment in the US', '900 North 12th Street', 'Fairfield', '56556', true, false, CURRENT_DATE, 1),
    (200000, 2, 'BUY', 'CONDO', 'The best condo in the US', '111 North 11th Street', 'Fairfield', '56556', true, false, CURRENT_DATE, 1),
    (250000, 2, 'RENT', 'APARTMENT', 'The best apartment in the US', '222 North 10th Street', 'Fairfield', '56556', true, false, CURRENT_DATE, 1),
    (100000, 3, 'BUY', 'APARTMENT', 'The best apartment in the US', '333 North 9th Street', 'Fairfield', '56556', true, false, CURRENT_DATE, 2),
    (350000, 3, 'RENT', 'APARTMENT', 'The best apartment in the US', '444 North 8th Street', 'Fairfield', '56556', true, false, CURRENT_DATE, 2);

-- PICTURE
INSERT INTO picture(path, property_id)
VALUES
    ('/picture1', 1),
    ('/picture2', 1),
    ('/picture3', 1),
    ('/picture1', 2),
    ('/picture2', 2),
    ('/picture1', 3),
    ('/picture2', 3),
    ('/picture1', 3),
    ('/picture2', 4),
    ('/picture1', 4),
    ('/picture2', 5);
