CREATE DATABASE node_crud;

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `age` int(3) NOT NULL,
  `diagnosis` varchar(150) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
 
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);
 
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
