import axios from "axios";

export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    payload: token
  };
};
export const setUserID = (userID) => {
  return {
    type: 'SET_USER_ID',
    payload: userID
  };
};

export const login = () => {
  return {
    type: 'LOGIN',
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const setRole = (role) => {
  return {
    type: 'SET_ROLE',
    payload: role
  }
}

export const setEmployeess = (employees) => {
  return {
    type: 'SET_EMPLOYEES',
    payload: employees
  }
}

export const setEmployeeId = (employeeId) => {
  return {
    type: 'SET_EMPLOYEE_ID',
    payload: employeeId
  }
}

  export const setSelectedEmployeeId = (selectedEmployeeId) => {
    return {
      type: 'SET_SELECTED_EMPLOYEES_ID',
      payload: selectedEmployeeId
    }
  }
export const updateEmployee = (employeeID, updatedData) => {
  return (dispatch) => {
    // API isteğini burada gerçekleştirin
    axios.put(`http://localhost:8080/hr/api/employees/update/${employeeID}`, updatedData)
      .then(response => {
        // Güncellenmiş işçi verilerini almak ve gerekirse store'u güncellemek için uygun işlemleri yapın
      })
      .catch(error => {
        console.error('Error updating employee:', error);
      });
  };
};