# exam-volume-analytics
Breaks down imaging department's exam volume and displays it on a graph

Take dept exam volume: 

	- Break down total volume by:
		- Year
		- Month
		- Week
		- Weekends
		- Weekdays
		- Day
		- Shift
	- Filter data by:
		- Modality
		- Priority
		- Ordering dept

		CHANGES


#### TODO:

- Get sample data with the above criteria
- Creat a CLI command that takes a `.csv` and returns analytics for provided params. Might look something like `exam-data.js -CT -1week`
- CLI possible params:
    - `exam-data.js <filter: "modality, priority, ordering dept"> | <data range by number of weeks from current day>(default:"1") | <date range: "mm/dd/yyyy - mm/dd/yyyy">`