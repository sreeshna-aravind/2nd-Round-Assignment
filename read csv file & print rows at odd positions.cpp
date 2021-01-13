#include<iostream.h>
#include<fstream>
using namespace std;
int main()
void read_record() 
{
	fstream fin; 
	fin.open("reportcard.csv", ios::in); 
	int rollnum, roll2, count = 0; 
	cout << "Enter the roll number "
		<< "of the student to display details: "; 
	cin >> rollnum; 
	vector<string> row; 
	string line, word, temp; 
	while (fin >> temp) { 
		row.clear(); 
		getline(fin, line); 
		stringstream s(line); 
		while (getline(s, word, ', ')) { 
			row.push_back(word); 
		} 
		roll2 = stoi(row[0]); 	
		if (roll2 == rollnum) { 
			count = 1; 
			cout << "Details of Roll " << row[1] << " : \n"; 
		        cout << "Name: " << row[3] << "\n"; 
			cout << "subject3: " << row[5] << "\n"; 
			cout << "subject5: " << row[7] << "\n"; 
			break; 
		} 
	} 
	if (count == 0) 
		cout << "Record not found\n"; 
} 