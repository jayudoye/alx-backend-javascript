// Define the RowID type
type RowID = number;

// Define the RowElement interface
interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}

export { RowID, RowElement };