import { Count } from "../count/Count";
import { useForm } from "./use-form";

export const FormLayout = () => {
  const {
    name,
    review,
    grade,
    setName,
    setReview,
    setIncreaseGrade,
    setDecreaseGrade,
    setDefaultValue,
    sendResult
  } = useForm();

  return (
    <form>
      <label htmlFor="name">
        <span>Имя:</span>
        <input 
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="review" style={{display: 'block'}}>
        <span>Ваш отзыв:</span>
        <textarea
          id="review"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        ></textarea>
      </label>
      <div>
        <span>Ваша оценка:</span>
        <Count value={grade} plusAction={setIncreaseGrade} minusAction={setDecreaseGrade} />
      </div>
      <button type="button" onClick={() => setDefaultValue()}>clear</button>
      <button type="button" onClick={sendResult}>submit</button>
    </form>
  )
}