
🚀 Cloud Task Manager – AWS 3-Tier Web Application

📌 Project Overview

Cloud Task Manager is a production-style 3-Tier Web Application deployed manually on AWS to demonstrate real-world cloud architecture, networking, and application integration. The application allows users to create and view tasks through a frontend interface, while the backend processes requests and stores data securely in a database.

This project showcases how frontend, backend, and database layers communicate securely using AWS services such as VPC, EC2, Application Load Balancer, and RDS MySQL.

🏗️ Architecture Design

The project follows a classic 3-Tier Architecture:

1. Presentation Tier (Frontend)

   * Hosted on an EC2 instance in a public subnet
   * Nginx serves the web interface to users

2. Application Tier (Backend)

   * Node.js Express application running on EC2 in a private subnet
   * Handles user inputs and business logic
   * Accessible only through the Application Load Balancer

3. Database Tier

   * Amazon RDS MySQL in a private subnet
   * Stores and retrieves task data securely

Traffic flow:

Browser → Frontend EC2 → ALB → Backend EC2 → RDS → Backend → Frontend

🎯 Features

* Users can add tasks with title, description, priority, assignee, and status
* Tasks are stored in Amazon RDS and displayed dynamically
* Secure communication between frontend, backend, and database
* Load balancer used to route traffic to private backend
* Fully isolated database layer for enhanced security

🧰 AWS Services Used

* Amazon EC2
* Amazon VPC
* Public and Private Subnets
* Internet Gateway
* NAT Gateway
* Route Tables
* Security Groups
* Application Load Balancer (ALB)
* Amazon RDS MySQL
* Nginx Web Server
* Node.js & Express

🔐 Security Implementation

* Backend EC2 and RDS are placed in private subnets
* Only ALB can communicate with backend EC2
* Only backend EC2 can access RDS (port 3306)
* SSH access restricted using security group rules
* NAT Gateway used to provide internet access to private instances

⚙️ Application Workflow

1. User opens the frontend page hosted on EC2
2. User enters task details and submits the form
3. Frontend sends request to backend through ALB
4. Backend processes the request and stores data in RDS
5. Backend fetches data from RDS and sends response back
6. Frontend displays updated task list dynamically

🧪 Testing and Validation

* Verified connectivity between tiers using curl and browser testing
* Ensured proper route table and security group configuration
* Handled real issues like EC2 public IP changes and port binding
* Confirmed end-to-end data flow from UI to database and back

💡 Learning Outcomes

* Deep understanding of AWS networking and VPC design
* Hands-on experience with 3-tier cloud architecture
* Practical knowledge of EC2, ALB, RDS integration
* Security group and routing configuration in real scenarios
* Debugging and troubleshooting cloud connectivity issues

🏁 Conclusion

This project demonstrates how a real-world web application can be securely deployed on AWS using a 3-tier architecture. It highlights best practices in networking, security, load balancing, and database integration, making it a strong foundation for AWS and DevOps roles.
