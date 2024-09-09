import s from "./TransactionItem.module.css";

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
