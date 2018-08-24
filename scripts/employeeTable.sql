Use Employee;

CREATE TABLE IF NOT EXISTS `tbl_Employee` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;


INSERT INTO `tbl_Employee` (`id`, `first_name`, `last_name`, `designation`, `email`, `phone`) VALUES
(1, 'John', 'Bill', 'Chief Executive Officer', 'jbill@yahoo.com', '086454743743'),
(2, 'Anthony', 'Sabzda', 'Solutions Architect', 'nadya@yahoo.com', '086454743743'),
(3, 'Amali', 'Wedel', 'Quality Assurance Manager', 'amalia@langit.com', '03937263623'),
(4, 'Cam', 'Mcenzee' 'Developer', 'angel@gmail.com', '082271626121')



