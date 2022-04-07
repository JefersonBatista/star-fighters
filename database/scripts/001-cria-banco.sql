CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	"fullName" TEXT NOT NULL,
	"birthDate" DATE NOT NULL,
	"position" TEXT NOT NULL,
	"dateJoined" DATE NOT NULL DEFAULT NOW(),
	"isActive" BOOLEAN NOT NULL DEFAULT FALSE,
	"grossSalary" INTEGER NOT NULL
);