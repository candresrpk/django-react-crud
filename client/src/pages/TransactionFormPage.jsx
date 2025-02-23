import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createTransaction,
  updateTransaction,
  getTransaction,
} from "../api/transactionsApi";
import { data, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const TransactionFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();

  const submitTransaction = handleSubmit(async (data) => {
    if (id) {
      await updateTransaction(id, data);
    } else {
      await createTransaction(data);
      toast.success("Transaction created successfully");
    }
    navigate("/");
  });

  const fetchTransaction = async (id) => {
    if (data) {
      const { data } = await getTransaction(id);
      setValue("title", data.title);
      setValue("category", data.category);
      setValue("amount", data.amount);
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    if (id) {
      fetchTransaction(id);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Transaction Form</h1>

      <form className="col-md-6 mx-auto" onSubmit={submitTransaction}>
        <div className="form-group mb-2">
          {errors.title && <p>{errors.title.message}</p>}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="name of the transaction"
            required
            {...register("title")}
          />
        </div>

        <div className="form-group mb-2">
          {errors.category && <p>{errors.category.message}</p>}

          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="form-control"
            required
            {...register("category")}
          >
            <option value="">Select a category</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="form-group mb-2">
          {errors.amount && <p>{errors.amount.message}</p>}

          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            placeholder="100"
            required
            {...register("amount")}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionFormPage;
