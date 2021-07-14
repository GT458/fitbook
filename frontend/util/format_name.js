
export const formatFirstName = fname => (
  fname[0].toUpperCase() + fname.slice(1)
);

export const formatLastName = lname => (
  lname[0].toUpperCase() + lname.slice(1)
);

export const formatFullName = (fname, lname) => (
  formatFirstName(fname) + ' ' + formatLastName(lname)
);
